// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RobotOutlinedSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RobotOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RobotOutlinedSvg}></AntdIcon>;
};

RobotOutlined.displayName = 'RobotOutlined';
RobotOutlined.inheritAttrs = false;
export default RobotOutlined;