// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WechatOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatOutlinedSvg}></AntdIcon>;
};

WechatOutlined.displayName = 'WechatOutlined';
WechatOutlined.inheritAttrs = false;
export default WechatOutlined;