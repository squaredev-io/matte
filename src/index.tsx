import * as React from 'react';

const Package: React.FC = () => (
  <div className="package">
    <h2>Do cool stuff</h2>
  </div>
);

export default Package;

export * from './components/dataviz/bar/bar.component';
export * from './components/dataviz/line/line.component';
export * from './components/dataviz/pie/pie.component';
export * from './components/display/avatar/avatar.component';
export * from './components/display/list/list.component';
export * from './components/display/table/table.component';
export * from './components/emptyStates/emptyState.component';
export * from './components/inputs/button/button.component';
export * from './components/inputs/select/select.component';
export * from './components/inputs/textField/textField.component';
export * from './components/navigation/breadcrumbs/breadcrumbs.component';
export * from './components/navigation/menu/menu.component';
export * from './components/structures/card/card.component';
export * from './components/structures/metric/metric.component';
export * from './components/structures/sidesheet/sidesheet.component';
export * from './components/structures/stepper/stepper.component';
export * from './components/structures/layout/layout.component';
export * from './components/utilities/createMatteTheme.component';
