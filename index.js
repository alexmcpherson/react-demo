import React from 'react';
import { render } from 'react-dom';

import Wrapper from './components/wrapper';

// jQuery-less onReady event
document.addEventListener("DOMContentLoaded", function() {
  render(<Wrapper />, document.getElementById('container'));
});
