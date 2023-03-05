import { Component, ChangeDetectorRef } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MediaMatcher } from '@angular/cdk/layout';

interface ITopicNode {
  name: string;
  children?: ITopicNode[];
  url? : string;
}

const TREE_DATA_ANGULAR: ITopicNode[] = [
  {
    name: 'Angular Core',
    children: [
      {name: 'Components',url: '/angular-core/components'},
      {name: 'Templates',url: '/angular-core/templates'},
      {name: 'Directives',url: '/angular-core/directives'},
      {name: 'Dependency Injection',url: '/angular-core/dependency-injection'},
    ]
  }, 
  {
    name: 'Feature',
    children: [
      {name: 'Routing & Navigation',url: '/feature/routing-navigation'}, 
      {name: 'Forms',url:  '/feature/forms'},
      {name: 'HTTP Client',url: '/feature/http-client'},
      {name: 'Testing',url: '/feature/testing'},
      {name: 'Internationalization(i18n)',url: ''},
      {name: 'Animations',url: '/feature/animations'},
      {name: 'Service Workers & PWA',url: ''},
      {name: 'Web Workers',url: ''},
      {name: 'Server-side Rendering',url: ''},
      {name: 'Prerendering',url: ''},
    ]
  },
  {
    name : 'Best Practices',
    children: [
      {name: 'Security',url: ''},
      {name: 'Accessibility',url: ''},
      {name: 'Keeping Up-to-Date',url: ''},
      {name: 'Property Binding',url: '/best-practices/property-binding'},
      {name: 'Lazy Loading Feature Modules',url: '/best-practices/lazy-module'},
      {name: 'Lightweight Injection Tokens for Libraries',url: '/best-practices/injection-tokens'},
    ]
  },
  {
    name: 'Tools',
    children: [
      {name: 'Dev Workflow', url: ''},
      {name: 'CLI Builders', url: ''},
      {name: 'Language Service', url: ''},
      {name: 'DevTools', url: ''},
      {name: 'Schematics', url: ''},
    ]
  },
  {
    name: 'Reference',
    children: [
      {name: 'Conceptual', url: '/reference/conceptual'},
      {name: 'CLI Command', url: ''},
      {name: 'API', url: ''},
      {name: 'Error', url: ''},
      {name: 'Glossary', url: '/reference/glossary'},
      {name: 'Style Guide', url: ''},
      {name: 'Cheat Sheet', url: '/reference/cheat-sheet'},
    ]
  },
];

const TREE_DATA_RXJS: ITopicNode[] = [
  {
    name: 'Overview',
    children: [
      {name: 'Introduction',url: '/overview/introduction'},
      {name: 'Observables',url: '/overview/observables'},
      {name: 'Observer',url: '/overview/observer'},
      {name: 'Operators',url: '/overview/operators'},
      {name: 'Subscription',url: '/overview/subscription'},
      {name: 'Subjects',url: '/overview/subjects'},
      {name: 'Scheduler',url: '/overview/scheduler'},
    ]
  },
  {
    name: 'Reference',
    children: [
      {name: '',url: ''},
    ]
  },
  {
    name: 'Glossary',
    children: [
      {name: 'Major Entities',url: '/glossary/major-entities'},
      {name: 'Minor Entities',url: '/glossary/minor-entities'},
      {name: 'Actions',url: '/glossary/actions'},
      {name: 'Concepts',url: '/glossary/concepts'},
      {name: 'Other',url: '/glossary/other'},
    ]
  }
];

const TREE_DATA_GIT: ITopicNode[] = [
  {
    name: 'Overview',
    children: [
      {name: 'Installation',url: '/overview/installation'},
      {name: 'Create repositories',url: '/overview/create-repositories'},
      {name: 'Configure tooling',url: '/overview/configure-tooling'},
      {name: 'Branches',url: '/overview/branches'},
      {name: 'Synchronize changes',url: '/overview/synchronize-changes'},
      {name: 'Make changes',url: '/overview/make-changes'},
      {name: 'Redo commits',url: '/overview/redo-commits'},
      {name: 'Merge Conflicts',url: '/overview/merge-conflicts'},
      {name: 'Fixing commit mistakes',url: '/overview/commit-mistakes'},
      {name: 'Forgot to branch',url: '/overview/forgot-branch'},
      {name: 'Merge strategies',url: '/overview/merge-strategies'},
      {name: 'Cherry Picking',url: '/overview/cherry-picking'},
      {name: 'Stash',url: '/overview/stash'},
      {name: 'SSH',url: '/overview/ssh'},
      {name: 'Glossary',url: '/overview/glossary'},
    ]
  },
  {
    name: 'Reference',
    children: [
      {name: 'Setup and Config',url: '/reference/config'},
      {name: 'Getting and Creating Projects',url: '/reference/creating'},
      {name: 'Basic Snapshotting',url: '/reference/snapshotting'},
      {name: 'Branching and Merging',url: '/reference/merging'},
      {name: 'Sharing and Updating Projects',url: '/reference/updating'},
      {name: 'Inspection and Comparison',url: '/reference/comparison'},
      {name: 'Patching',url: '/reference/patching'},
      {name: 'Debugging',url: '/reference/debugging'},
    ]
  }
];

const TREE_DATA_JS: ITopicNode[] = [
  {
    name: 'The JavaScript language',
    children: [
      {name: 'Fundamentals',url: '/javascript/fundamentals'},
      {name: 'Code quality',url: '/javascript/code-quality'},
      {name: 'Objects: the basics',url: '/javascript/objects'},
      {name: 'Data types',url: '/javascript/data-types'},
      {name: 'Advanced working with functions',url: '/javascript/advanced-functions'},
      {name: 'Object properties configuration',url: '/javascript/object-properties'},
      {name: 'Prototypes, inheritance',url: '/javascript/prototypes-inheritance'},
      {name: 'Classes',url: '/javascript/classes'},
      {name: 'Error handling',url: '/javascript/error-handling'},
      {name: 'Promises, async/await',url: '/javascript/promises-async-await'},
      {name: 'Generators, advanced iteration',url: '/javascript/generators'},
      {name: 'Modules',url: '/javascript/modules'},
      {name: 'Miscellaneous',url: '/javascript/miscellaneous'},
    ]
  },
  {
    name: 'Browser: Document, Events, Interfaces',
    children: [
      {name: 'Document',url: '/browser/document'},
      {name: 'Introduction to Events',url: '/browser/events'},
      {name: 'UI Events',url: '/browser/ui-events'},
      {name: 'Forms, controls',url: '/browser/forms'},
      {name: 'Document and resource loading',url: '/browser/document-resource-loading'},
      {name: 'Miscellaneous',url: '/browser/miscellaneous'},
    ]
  },
  {
    name: 'Additional articles',
    children: [
      {name: 'Frames and windows',url: '/additional/frames-windows'},
      {name: 'Binary data, files',url: '/additional/binary-data'},
      {name: 'Network requests',url: '/additional/network-requests'},
      {name: 'Storing data in the browser',url: '/additional/store-data'},
      {name: 'Animation',url: '/additional/animation'},
      {name: 'Web components',url: '/additional/web-components'},
    ]
  },
]

const TREE_DATA_SASS: ITopicNode[] = [
  {
    name: 'Basics',
    children: [
      {name: 'Installation',url: '/basics/installation'},
      {name: 'Preprocessing',url: '/basics/preprocessing'},
      {name: 'Variables',url: '/basics/variables'},
      {name: 'Nesting',url: '/basics/nesting'},
      {name: 'Partials',url: '/basics/partials'},
      {name: 'Modules',url: '/basics/modules'},
      {name: 'Mixins',url: '/basics/mixins'},
      {name: 'Inheritance',url: '/basics/inheritance'},
      {name: 'Operators',url: '/basics/operators'},
    ]
  },
  {
    name: 'Syntax',
    children: [
      {name: 'Overview',url: '/syntax/overview'},
      {name: 'Parsing',url: '/syntax/parsing'},
      {name: 'Structure',url: '/syntax/structure'},
      {name: 'Comments',url: '/syntax/comments'},
      {name: 'Special Functions',url: '/syntax/special-function'},
    ]
  },
  {
    name: 'Style Rules',
    children: [
      {name: 'Overview',url: '/rules/overview'},
      {name: 'Property Declarations',url: '/rules/property-declarations'},
      {name: 'Parent Selector',url: '/rules/parent-selector'},
      {name: 'Placeholder Selectors',url: '/rules/placeholder-selectors'},
    ]
  },
  {
    name: 'Variable',
    children: [
      {name: 'Variable',url: '/variable/variable'},
      
    ]
  },
  {
    name: 'Interpolation',
    children: [
      {name: 'Interpolation',url: '/interpolation/interpolation'},
      
    ]
  },
  {
    name: 'At-Rules',
    children: [
      {name: 'Overview',url: '/at-rules/overview'},
      {name: '@use',url: '/at-rules/use'},
      {name: '@forwward',url: '/at-rules/forward'},
      {name: '@import',url: '/at-rules/import'},
      {name: '@mixin and @incude',url: '/at-rules/mixin-include'},
      {name: '@function',url: '/at-rules/function'},
      {name: '@extend',url: '/at-rules/extend'},
      {name: '@error',url: '/at-rules/error'},
      {name: '@warn',url: '/at-rules/warn'},
      {name: '@debug',url: '/at-rules/debug'},
      {name: '@at-root',url: '/at-rules/at-root'},
      {name: 'Flow Control',url: '/at-rules/flow-control'},
      {name: 'From CSS',url: '/at-rules/css'},
    ]
  },
  {
    name: 'Values',
    children: [
      {name: 'Overview',url: '/values/overview'},
      {name: 'Numbers',url: '/values/numbers'},
      {name: 'Strings',url: '/values/strings'},
      {name: 'Colors',url: '/values/colors'},
      {name: 'Lists',url: '/values/lists'},
      {name: 'Maps',url: '/values/maps'},
      {name: 'true and false',url: '/values/true-false'},
      {name: 'null',url: '/values/null'},
      {name: 'Functions',url: '/values/functions'},
    ]
  },
  {
    name: 'Operators',
    children: [
      {name: 'Overview',url: '/operators/overview'},
      {name: 'Equality',url: '/operators/equality'},
      {name: 'Relational',url: '/operators/relational'},
      {name: 'Numeric',url: '/operators/numeric'},
      {name: 'String',url: '/operators/string'},
      {name: 'Boolean',url: '/operators/boolean'},
    ]
  },
  {
    name: 'Built-in Modules',
    children: [
      {name: 'Overview',url: '/built-in/overview'},
      {name: 'sass:color',url: '/built-in/color'},
      {name: 'sass:list',url: '/built-in/list'},
      {name: 'sass:map',url: '/built-in/map'},
      {name: 'sass:math',url: '/built-in/math'},
      {name: 'sass:meta',url: '/built-in/meta'},
      {name: 'sass:selector',url: '/built-in/selector'},
      {name: 'sass:string',url: '/built-in/string'},
    ]
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micheatshit';

  techs = ['angular', 'rxjs', 'git', 'js', 'sass'];

  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  treeControl = new NestedTreeControl<ITopicNode >(node => node.children);
  dataSource = new MatTreeNestedDataSource<ITopicNode >();

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    console.log(window);
    this.dataSource.data = TREE_DATA_ANGULAR;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;
  hasChild = (_: number, node: ITopicNode ) => !!node.children && node.children.length > 0;

  selectedTech = 'angular';
  switchTech = (tech) => {
    this.selectedTech = tech;
    this.dataSource.data = [];
    this.dataSource.data = this.selectedTech === 'rxjs' 
      ? TREE_DATA_RXJS
      : this.selectedTech === 'git'
        ? TREE_DATA_GIT
        : this.selectedTech === 'js' 
          ? TREE_DATA_JS
          : this.selectedTech === 'sass' 
            ? TREE_DATA_SASS
            : TREE_DATA_ANGULAR;

    console.log(this.selectedTech);
    // console.log(this.dataSource);
  }
}
