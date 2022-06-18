import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as MenuSVG } from './menu.svg';
import { ReactComponent as LupaSVG } from './lupa.svg';
import { ReactComponent as DeleteSVG } from './delete.svg'
import { ReactComponent as EditSVG }  from './edit.svg'

import './TodoIcon.css';

const iconTypes = {
  "check": (color) => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "menu": (color) => (
    <MenuSVG className="Icon-svg Icon-svg--menu" fill={color} />
  ),
  "delete": (color) => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
  "lupa": (color) => (
    <LupaSVG className="Icon-svg Icon-svg--lupa" fill={color} />
  ),
  "edit": (color) => (
    <EditSVG className="Icon-svg Icon-svg--edit" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick, id}) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      <div>{id }</div>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
