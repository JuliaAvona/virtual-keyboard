const createElement = (elem, classNames, child, parent, ...dataAttributes) => {

  let component = null;
  component = document.createElement(elem);

  if (classNames) {
    component.classList.add(...classNames.split(' '));
  }

  if (child) {
    if (Array.isArray(child)) {
      child.forEach((childElem) => {
        component.append(childElem);
      });

    } else if (typeof child === 'string') {
      component.innerHTML = child;

    } else {
      component.append(child);
    }
  }
  if (parent) { parent.append(component);}

  if (dataAttributes.length) {

    dataAttributes.forEach(([attributeName, attributeValue]) => {

      if (attributeValue) {
        component.setAttribute(attributeName, attributeValue);

      } else {
        component.setAttribute(attributeName, '');
        
      }
    });
  }
  return component;
};

export default createElement;