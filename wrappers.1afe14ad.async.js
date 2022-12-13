(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"9kvl":function(e,n,t){"use strict";var o=t("FfOG");t.d(n,"a",(function(){return o["b"]}));t("bCY9")},afA6:function(e,n,t){"use strict";t.r(n);var o=t("Sp4s"),r=t("q1tI"),a=t.n(r),i=t("q3YX"),c=t("2W1u"),u=t("4//D"),s=t("LtsZ"),l='import { Alert, Space } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <Space>\n      <Alert type="default" message="Default Text" />\n      <Alert type="info" message="Info Text" />\n      <Alert type="warning" message="Warning Text" />\n      <Alert type="error" message="Error Text" />\n    </Space>\n  );\n}',p='import { Alert, Space } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function WithIcon() {\n  const customMessage = () => {\n    return (\n      <div style={{ marginTop: \'10px\', color: \'red\' }}>custom Message</div>\n    );\n  };\n  return (\n    <Space>\n      <Alert type="default" message="Default Text" title="Default title" />\n      <Alert type="info" message="Info Text" title="Info title" />\n      <Alert type="warning" message="Warning Text" title="Warning title" />\n      <Alert type="error" message="Error Text" title="Error title" />\n      <Alert\n        type="error"\n        message={customMessage()}\n        title="Error title"\n        icon="loudspeaker"\n      />\n    </Space>\n  );\n}',d='import { Badge, Space } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <Space>\n      <Space direction="horizontal">\n        <Badge count={20} status="default" />\n        <Badge count={20} status="success" />\n        <Badge count={20} status="warning" />\n        <Badge count={20} status="error" />\n      </Space>\n      <Space direction="horizontal">\n        <Badge count={999} status="default" />\n        <Badge count={999} status="success" />\n        <Badge count={999} status="warning" />\n        <Badge count={999} status="error" />\n      </Space>\n      <Space direction="horizontal">\n        <Badge count={99} status="error" />\n        <Badge count={100} status="error" />\n        <Badge count={99} overflowCount={10} status="error" />\n        <Badge count={1000} overflowCount={999} status="error" />\n      </Space>\n    </Space>\n  );\n}',m="import { Checkbox } from '@kube-design/components';\nimport React from 'react';\n\nexport default function Basic() {\n  return (\n    <div>\n      <Checkbox> Checkbox </Checkbox>\n    </div>\n  );\n}",b='import { Button } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function WithIcon() {\n  return (\n    <div>\n      <Button icon="add">Kube Design</Button>\n      <Button icon="add" />\n      <Button icon="add" type="flat" />\n      <Button icon="add" type="primary" />\n      <Button icon="add" iconType="light" type="control" />\n      <Button icon="add" iconType="coloured" type="default" />\n      <Button icon="add" type="danger" />\n      <Button icon="add" disabled />\n    </div>\n  );\n}',f='import { Button } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function WithLoading() {\n  return (\n    <div>\n      <Button type="primary" loading={true}>\n        Kube Design\n      </Button>\n      <Button type="control" loading={true}>\n        Kube Design\n      </Button>\n      <Button type="danger" loading={true}>\n        Kube Design\n      </Button>\n      <Button type="flat" loading={true}>\n        Kube Design\n      </Button>\n      <Button type="default" loading={true}>\n        Kube Design\n      </Button>\n      <Button type="default" loading={true} ghost>\n        Kube Design\n      </Button>\n    </div>\n  );\n}',B="import { Checkbox } from '@kube-design/components';\nimport React from 'react';\n\nexport default function Basic() {\n  return (\n    <div>\n      <Checkbox>Checkbox</Checkbox>\n      <Checkbox disabled>Checkbox</Checkbox>\n      <Checkbox disabled checked>\n        Checkbox\n      </Checkbox>\n      <Checkbox indeterminate>Checkbox</Checkbox>\n      <Checkbox checked>Checkbox</Checkbox>\n      <Checkbox\n        value={'check'}\n        onChange={(checked: boolean, val) => {\n          console.log(checked, val);\n        }}\n      >\n        Checkbox\n      </Checkbox>\n    </div>\n  );\n}",h="import { CheckboxGroup } from '@kube-design/components';\nimport React from 'react';\n\nconst options = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange' },\n];\nconst optionsWithDisabled = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange', disabled: false },\n];\n\nexport default function Basic() {\n  const onChange = (checkedValues: any) => {\n    console.log('checked = ', checkedValues);\n  };\n\n  return (\n    <div>\n      <CheckboxGroup options={options}></CheckboxGroup>\n      <CheckboxGroup\n        disabled\n        defaultValue={['Apple']}\n        options={optionsWithDisabled}\n        onChange={onChange}\n      ></CheckboxGroup>\n    </div>\n  );\n}",g='import { Collapse } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <div style={{ padding: 20 }}>\n      <Collapse\n        defaultActiveKey={[\'p1\']}\n        style={{ boxShadow: \'0 4px 16px 0 rgba(39, 50, 71, 0.28)\' }}\n      >\n        <Collapse.CollapseItem label="Paragraph-1" key="p1">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec\n          purus a lacus placerat sodales ac a ante. Suspendisse mi dolor,\n          facilisis sed cursus ac, dapibus eu orci. Vivamus commodo ullamcorper\n          elit et luctus. Cras dapibus eros eu ante dapibus, in malesuada sapien\n          scelerisque. Etiam mollis consectetur dapibus. Quisque tincidunt mi\n          erat. Cras suscipit mi ac euismod euismod. Class aptent taciti\n          sociosqu ad litora torquent per conubia nostra, per inceptos\n          himenaeos. Duis elementum, erat at tristique porttitor, purus tortor\n          maximus mauris, sit amet tristique lectus lectus nec arcu. Vestibulum\n          tempus velit urna, quis mattis ex pharetra at. Phasellus ac malesuada\n          ante, eget elementum orci. Quisque vel odio mi.\n        </Collapse.CollapseItem>\n        <Collapse.CollapseItem label="Paragraph-2" key="p2">\n          Sed in maximus lectus. Suspendisse consectetur, magna non interdum\n          dapibus, magna purus euismod dui, at vestibulum neque libero eu metus.\n          Duis quis mauris orci. Mauris id nisl dolor. Pellentesque suscipit\n          nisl quis lacus aliquam rutrum. Ut ac tellus ultrices, commodo est\n          sed, condimentum leo. Fusce posuere eleifend sem, sed fermentum nibh\n          euismod non. Vivamus ac lorem faucibus, tristique tortor nec, tempus\n          magna. Morbi bibendum pretium sem in blandit. Suspendisse sed\n          imperdiet ante, ac tincidunt ante. Duis quis libero efficitur, tempor\n          urna quis, feugiat purus. Vestibulum sit amet ipsum tincidunt,\n          pellentesque nulla id, feugiat orci. Pellentesque rhoncus dui metus,\n          sollicitudin luctus mauris gravida vel. Phasellus vitae placerat ex.\n          Pellentesque eget sollicitudin ipsum. Vestibulum placerat, diam et\n          varius sodales, leo velit consectetur urna, a viverra nulla nunc nec\n          enim.\n        </Collapse.CollapseItem>\n        <Collapse.CollapseItem label="Paragraph-3" key="p3">\n          Duis sit amet sem eu ante posuere scelerisque. Curabitur tempus quis\n          turpis a dignissim. Suspendisse malesuada at sem quis imperdiet.\n          Suspendisse potenti. Ut fringilla urna a cursus tincidunt. Duis non\n          odio dui. Duis aliquam justo in scelerisque venenatis. Etiam ligula\n          dolor, convallis ut interdum nec, condimentum vitae massa. Sed at odio\n          vulputate, bibendum lorem quis, lacinia justo.\n        </Collapse.CollapseItem>\n        <Collapse.CollapseItem label="Paragraph-4" key="p4">\n          In vitae rhoncus lectus. Morbi at venenatis nunc. Mauris placerat nibh\n          vel sem vulputate, vel porttitor libero fringilla. In orci mi, semper\n          ac neque non, consectetur fermentum tellus. Pellentesque ut ligula\n          convallis, fringilla magna non, consectetur lectus. Morbi vehicula\n          sapien nec dapibus convallis. Maecenas suscipit, justo at vestibulum\n          varius, dui augue cursus dolor, et iaculis dolor nunc ut leo.\n        </Collapse.CollapseItem>\n      </Collapse>\n    </div>\n  );\n}',v='import { Icon, Space } from \'@kube-design/components\';\nimport { IconDemoBlock } from \'demos\';\nimport React from \'react\';\n\nexport default function Size() {\n  return (\n    <Space direction="horizontal">\n      <IconDemoBlock name="docker">\n        <Icon name="docker" size="large" />\n      </IconDemoBlock>\n      <IconDemoBlock name="docker">\n        <Icon name="docker" size="medium" />\n      </IconDemoBlock>\n      <IconDemoBlock name="docker">\n        <Icon name="docker" size="small" />\n      </IconDemoBlock>\n      <IconDemoBlock name="docker">\n        <Icon name="docker" size={56} />\n      </IconDemoBlock>\n    </Space>\n  );\n}',k='import { Icon, Space } from \'@kube-design/components\';\nimport { IconDemoBlock } from \'demos\';\nimport React from \'react\';\n\nexport default function Size() {\n  return (\n    <Space direction="horizontal">\n      <IconDemoBlock name="docker">\n        <Icon name="docker" size="large" type="dark" />\n      </IconDemoBlock>\n      <IconDemoBlock name="docker">\n        <Icon name="docker" size="medium" type="light" />\n      </IconDemoBlock>\n      <IconDemoBlock name="docker">\n        <Icon name="docker" size="small" type="coloured" />\n      </IconDemoBlock>\n      <IconDemoBlock name="docker">\n        <Icon name="docker" size={56} />\n      </IconDemoBlock>\n    </Space>\n  );\n}',x='import { Loading } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <div>\n      <Loading size="large" />\n      <Loading size="medium" />\n      <Loading size="small" />\n    </div>\n  );\n}',y='import { Badge, Button, Space } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <Space direction="horizontal">\n      <Button>Button</Button>\n      <Button type="primary">Button</Button>\n      <Button type="control">Button</Button>\n      <Badge count={999} status="default" />\n    </Space>\n  );\n}',w='import { Badge, Space } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <Space direction="vertical">\n      <Badge count={999} status="success" />\n      <Badge count={999} status="warning" />\n      <Badge count={999} status="error" />\n    </Space>\n  );\n}',O='import { Button, Space } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <Space>\n      <Space direction="horizontal" align="start">\n        <Button>Button</Button>\n        <Button type="primary">Button</Button>\n        <Button type="control">Button</Button>\n      </Space>\n      <Space direction="horizontal" align="center">\n        <Button>Button</Button>\n        <Button type="primary">Button</Button>\n        <Button type="control">Button</Button>\n      </Space>\n      <Space direction="horizontal" align="baseline">\n        <Button>Button</Button>\n        <Button type="primary">Button</Button>\n        <Button type="control">Button</Button>\n      </Space>\n      <Space direction="horizontal" align="end">\n        <Button>Button</Button>\n        <Button type="primary">Button</Button>\n        <Button type="control">Button</Button>\n      </Space>\n    </Space>\n  );\n}',j='import { Button, Space } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <Space direction="horizontal" wrap>\n      <Button>Button</Button>\n      <Button type="primary">Button</Button>\n      <Button type="control">Button</Button>\n      <Button>Button</Button>\n      <Button type="primary">Button</Button>\n      <Button type="control">Button</Button>\n      <Button>Button</Button>\n      <Button type="primary">Button</Button>\n      <Button type="control">Button</Button>\n      <Button>Button</Button>\n      <Button type="primary">Button</Button>\n      <Button type="control">Button</Button>\n      <Button>Button</Button>\n      <Button type="primary">Button</Button>\n      <Button type="control">Button</Button>\n      <Button>Button</Button>\n      <Button type="primary">Button</Button>\n      <Button type="control">Button</Button>\n      <Button>Button</Button>\n      <Button type="primary">Button</Button>\n      <Button type="control">Button</Button>\n    </Space>\n  );\n}',S='import { Button, Space } from \'@kube-design/components\';\nimport React from \'react\';\n\nexport default function Basic() {\n  return (\n    <Space>\n      <Space direction="horizontal" size="small">\n        <Button>Button</Button>\n        <Button type="primary">Button</Button>\n        <Button type="control">Button</Button>\n      </Space>\n      <Space direction="horizontal" size="medium">\n        <Button>Button</Button>\n        <Button type="primary">Button</Button>\n        <Button type="control">Button</Button>\n      </Space>\n      <Space direction="horizontal" size="large">\n        <Button>Button</Button>\n        <Button type="primary">Button</Button>\n        <Button type="control">Button</Button>\n      </Space>\n    </Space>\n  );\n}',C={"alert-basic":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"zY53"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"alert-basic"}},"alert-withicon":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"GcDy"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"alert-withicon"}},"badge-basic":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"UxYm"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"badge-basic"}},"button-basic":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"FkdU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"button-basic"}},"button-withicon":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"/fta"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"button-withicon"}},"button-withloading":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"cWsf"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"button-withloading"}},"checkbox-basic":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"N/DH"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:B}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"checkbox-basic"}},"checkbox-basicgroup":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"jeHE"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"checkbox-basicgroup"}},"collapse-basic":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"s1JQ"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"collapse-basic"}},"icon-size":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"pkjx"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"icon-size"}},"icon-type":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"wTv8"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},background:"rgb(186 207 186)",identifier:"icon-type"}},"loading-basic":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"v13t"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:x}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"loading-basic"}},"space-basich":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"MASe"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:y}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"space-basich"}},"space-basicv":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"yldU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:w}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"space-basicv"}},"space-align":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"zG3C"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:O}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"space-align"}},"space-wrap":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"s+Bg"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:j}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"space-wrap"}},"space-size":{component:Object(s["dynamic"])({loader:function(){var e=Object(u["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(4),t.e(3),t.e(16)]).then(t.bind(null,"a/2Z"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:S}},dependencies:{"@kube-design/components":{version:"0.0.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"space-size"}}},P=t("x2v5"),I=t("KcUY"),D=t.n(I);n["default"]=e=>a.a.createElement(D.a,Object(o["a"])({},e,{config:i,demos:C,apis:P}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"zh":{"/404":[{"path":"/404","title":"404","meta":{}}],"*":[{"path":"/","title":"kube-design - Documentation tool for component development scenarios","meta":{"order":10}}],"/guide":[{"title":"\u5feb\u901f\u4e0a\u624b","path":"/guide/quick-start"},{"title":"CSS \u53d8\u91cf","path":"/guide/css-variables"},{"title":"\u4e3b\u9898","path":"/guide/theming"},{"title":"\u6df1\u8272\u6a21\u5f0f","path":"/guide/dark-mode"},{"title":"\u6309\u9700\u52a0\u8f7d","path":"/guide/import-on-demand"},{"title":"\u56fd\u9645\u5316","path":"/guide/i18n"}],"/components":[{"title":"\u901a\u7528","children":[{"path":"/components/icon","title":"Icon \u56fe\u6807"},{"path":"/components/color","title":"Colors \u989c\u8272"},{"path":"/components/button","title":"Button \u6309\u94ae"}]},{"title":"\u5e03\u5c40","children":[{"path":"/components/space","title":"Space \u95f4\u8ddd"}]},{"title":"\u4fe1\u606f\u5c55\u793a","children":[{"path":"/components/badge","title":"Badge \u5fae\u6807\u6570"},{"path":"/components/collapse","title":"Collapse \u6298\u53e0\u9762\u677f"}]},{"title":"\u4fe1\u606f\u5f55\u5165","children":[{"path":"/components/checkbox","title":"Checkbox \u591a\u9009\u6846"}]},{"title":"\u53cd\u9988","children":[{"path":"/components/loading","title":"Loading \u52a0\u8f7d"},{"path":"/components/alert","title":"Alert \u8b66\u544a\u63d0\u793a"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"zh","label":"\u4e2d\u6587"}],"navs":{"zh":[{"title":"\u6307\u5357","path":"/guide"},{"title":"\u7ec4\u4ef6","path":"/components"},{"title":"GitHub","path":"https://github.com/51wangping/kube-design"}]},"title":"kube-design","logo":"https://kubesphere.cloud/images/index/logo-QC.svg","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);