const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            { 
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
function createNodes(structure) {
   
  if (structure.length !== 0) {

    let ul = document.createElement('ul');
    ul.id = 'tree';
    ul.className = 'tree';

    for(let i = 0; i < structure.length; i++) {

      if (structure[i]['folder'] === true) {

        let li = document.createElement('li');
        li.className = 'folder';
        li.innerHTML = structure[i]['title'];
  
        let spanIcon = document.createElement('span');
        spanIcon.className = 'material-icons';
        spanIcon.innerHTML = 'folder';
        ul.append(li);
        li.append(spanIcon);
       

        if (structure[i]['children']) {
          createChildren(structure[i]['children'], li);
        }  

      } 
    } 

    rootNode.append(ul);
  }
}

function createChildren(elements, li) {
  if (elements.length !== 0) {

    let ul = document.createElement('ul');

    for(let i = 0; i < elements.length; i++) {

      if (elements[i]['folder'] === true) {

        let li = document.createElement('li');
        li.className = 'folder';
        li.innerHTML = elements[i]['title'];
  
        let spanIcon = document.createElement('span');
        spanIcon.className = 'material-icons';
        spanIcon.innerHTML = li.getElementsByTagName('ul').hidden === true ? 'folder' : 'folder_open';
        ul.append(li);
        li.append(spanIcon);

        if (elements[i]['children']) {
          createChildren(elements[i]['children'], li);
        }  

        if (!elements[i]['children'] ) {
          let ul = document.createElement('ul');
          let div = document.createElement('div');
          div.className = 'empty'; 
          div.innerHTML = 'Folder is empty';
          ul.hidden = true;
          ul.append(div);
          li.append(ul); 
        }  

      } else {

        let li = document.createElement('li');
        li.className = 'avi';
        li.innerHTML = elements[i]['title'];
  
        let spanIcon = document.createElement('span');
        spanIcon.className = 'material-icons';
        spanIcon.innerHTML = 'insert_drive_file';
        ul.append(li);
        li.append(spanIcon);

        if (elements[i]['children']) {
          createChildren(elements[i]['children'], li);
        }  

      }
    } 

    ul.hidden = true;
    li.append(ul);
  } 
}

createNodes(structure);

for (let li of rootNode.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}


rootNode.onclick = function(event) {
  
  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
    return
  }

  childrenContainer.hidden = !childrenContainer.hidden;

  let icon = event.target.parentNode.querySelector('.material-icons');
  icon.innerHTML = childrenContainer.hidden ? 'folder' : 'folder_open';
}