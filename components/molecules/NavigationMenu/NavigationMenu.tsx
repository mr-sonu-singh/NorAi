import React from 'react';
import { NavigationGroup } from '../NavigationGroup';
import { NavigationMenuProps } from './NavigationMenu.types';

export function NavigationMenu(props: NavigationMenuProps) {
  return (
    <nav aria-label="Main Navigation">
      <NavigationGroup data-testid="navigation-menu-molecule" {...props} />
    </nav>
  );
}
