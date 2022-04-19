import { useContext } from 'react';

import React from 'react';

const ActiveSection = React.createContext();

export default ActiveSection;

export const ActiveSectionContext = () => useContext(ActiveSection);
