import { sequence, trigger, animate, style, group, query, transition, animateChild, state, animation, useAnimation, stagger } from '@angular/animations';

const customAnimation = animation([
  style({
    opacity: '{{opacity}}',
    transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
  }),
  animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
  params: {
    duration: '200ms',
    delay: '0ms',
    opacity: '0',
    scale: '1',
    x: '0',
    y: '0',
    z: '0'
  }
});

export const AllAnimations = [

  trigger('animate', [transition('void => *', [useAnimation(customAnimation)])]),

  trigger('animateStagger', [
    state('50', style('*')),
    state('100', style('*')),
    state('200', style('*')),

    transition('void => 50',
      query('@*',
        [
          stagger('50ms', [
            animateChild()
          ])
        ], { optional: true })),
    transition('void => 100',
      query('@*',
        [
          stagger('100ms', [
            animateChild()
          ])
        ], { optional: true })),
    transition('void => 200',
      query('@*',
        [
          stagger('200ms', [
            animateChild()
          ])
        ], { optional: true }))
  ]),

  trigger('fadeInOut', [
    state('0, void', style({
      opacity: 0
    })),
    state('1, *', style({
      opacity: 1
    })),
    transition('1 => 0', group([animate('300ms ease-out')])),
    transition('0 => 1', animate('300ms ease-in')),
    transition('void <=> *', animate('300ms ease-in')),
  ]),
  trigger('rotate', [
    state('0, void', style({
      transform: 'rotate(0)'
    })),
    state('1, *', style({
      transform: 'rotate(180deg)'

    })),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in')),
    transition('void <=> *', animate('300ms ease-in'))
  ]),

  trigger('slideInOut', [
    state('0', style({
      height: '0px'
    })),
    state('1', style({
      height: '*'
    })),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in'))
  ]),



  trigger('slideInTop', [
    state('void', style({
      transform: 'translateY(-100%)',
    })),
    state('*', style({
      transform: 'translateY(0)',
    })),
    transition('void => *', animate('300ms')),
    transition('* => void', animate('300ms'))
  ]),
];

