import * as React from 'react';
import { ComponentType, WidgetMap } from '@my-low-code/basic-components';

type Props = {
  data: {
    type: ComponentType;
    id: string;
    formConfig?: {
      [key: string]: any;
    };
  }[];
};
const Renderer = ({ data }: Props) => {
  return data?.map(item=>{
      const Component = WidgetMap[item.type].component
      return <Component {...item.formConfig} />
  }
  )
};

export default Renderer;
