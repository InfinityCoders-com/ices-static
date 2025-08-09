interface IRoutes {
  label: string
  url: string
  title: string
  children?: IRoutes[]
}

export const routes: IRoutes[] = [
  { label: 'HTML', url: '', title: '' },
  {
    label: 'React',
    url: '',
    title: '',
    children: [
      { label: 'About', url: '', title: '' },
      { label: 'Installation', url: '', title: '' },
      { label: 'Get Started', url: '', title: '' }
    ]
  },
  {
    label: 'Vanilla Js Codes API',
    url: '',
    title: '',
    children: [
      { label: 'Math', url: '', title: '' },
      { label: 'Number', url: '', title: '' },
      { label: 'Number', url: '', title: '' }
    ]
  },
  { label: 'CSS', url: '', title: '' },
  {
    label: 'UI/UX',
    url: '',
    title: 'React Js UI Library',
    children: [
      { label: 'About', url: '', title: '' },
      { label: 'Installation', url: '', title: '' },
      {
        label: 'Components',
        url: '',
        title: '',
        children: [
          { label: 'Accordion / Collapse', url: '', title: '' },
          { label: 'Avatar', url: '', title: '' },
          { label: 'Alert', url: '', title: '' },
          { label: 'Card', url: '', title: '' },
          { label: 'Confirm', url: '', title: '' },
          { label: 'CountDownTimer', url: '', title: '' },
          { label: 'DatePicker', url: '', title: '', children: [
            { label: 'DatePicker', url: '', title: '' },
            { label: 'RangePicker', url: '', title: '' },
            { label: 'TimePicker', url: '', title: '' },
            { label: 'Date Time Picker', url: '', title: '' },
          ] },
          { label: 'Documentation', url: '', title: '' },
          { label: 'Dropdown', url: '', title: '' },
          { label: 'ErrorHandles', url: '', title: '' },
          { label: 'Forms', url: '', title: '', children: [
            { label: 'Button', url: '', title: '' },
            { label: 'Input', url: '', title: '' },
            { label: 'TextArea', url: '', title: '' },
            { label: 'Select', url: '', title: '' },
            { label: 'SearchSelect', url: '', title: '' },
          ] },
          { label: 'Graphs', url: '', title: '', children: [
            { label: 'Area', url: '', title: '' },
            { label: 'Bar', url: '', title: '' },
            { label: 'BarHorizontal', url: '', title: '' },
            { label: 'CandleStick', url: '', title: '' },
            { label: 'Line', url: '', title: '' },
            { label: 'Pie', url: '', title: '' }
          ] },
          { label: 'Hooks', url: '', title: '', children: [
            { label: 'useDebounce', url: '', title: '' },
            { label: 'usePrevious', url: '', title: '' },
            { label: 'useWindowDimensions', url: '', title: '' },
            { label: '', url: '', title: '' },
          ] },
          { label: 'Icons', url: '', title: '', children: [
            { label: '', url: '', title: '' },
          ] },
          { label: 'Image', url: '', title: '' },
          { label: 'JSONEditor', url: '', title: '' },
          { label: 'Layout', url: '', title: '', children: [
            { label: 'Flex', url: '', title: '' },
            { label: 'Grid', url: '', title: '' },
          ] },
          { label: 'Link', url: '', title: '' },
          { label: 'List', url: '', title: '', children: [
            { label: '', url: '', title: '' },
          ] },
          { label: 'Loader', url: '', title: '', children: [] },
          { label: 'Map', url: '', title: '' },
          { label: 'Modal', url: '', title: '' },
          { label: 'PopOver', url: '', title: '' },
          { label: 'Rate', url: '', title: '' },
          { label: 'RenderControl', url: '', title: '' },
          { label: 'Table', url: '', title: '', children: [
            { label: 'Light', url: '', title: '' },
            { label: 'Advanced', url: '', title: '' },
          ] },
          { label: 'Tabs', url: '', title: '', children: [
            { label: 'Horizontal', url: '', title: '' },
            { label: 'Vertical', url: '', title: '' }
          ] },
          { label: 'Tests', url: '', title: '' },
          { label: 'Theme', url: '', title: '', children: [
            { label: 'Antd', url: '', title: '' },
            { label: 'Bootstrap', url: '', title: '' },
            { label: 'Material', url: '', title: '' },
            { label: '', url: '', title: '' },
          ] },
          { label: 'TimeLine', url: '', title: '' },
          { label: 'Toastify', url: '', title: '' },
          { label: 'Transition', url: '', title: '' },
          { label: 'Typography', url: '', title: '', children: [
            { label: 'Label', url: '', title: '' },
            { label: 'Paragraph', url: '', title: '' },
            { label: 'Span', url: '', title: '' },
            { label: '', url: '', title: '' },
          ] }
        ]
      }
    ]
  }
]
