// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarsOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarsOutlinedSvg}></AntdIcon>;
};

BarsOutlined.displayName = 'BarsOutlined';
BarsOutlined.inheritAttrs = false;
export default BarsOutlined;