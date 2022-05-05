const PlainImageComponentSchema = {
  formSchema: {
    type: "object",
    properties: {
      src: {
        type: "string",
        title: "图片地址",
        "x-decorator": "FormItem",
        "x-component": "Input",
        "x-component-props": {
          placeholder: "请输入图片地址",
        },
        "x-validator": [{ required: true }, { maximum: 1000 }],
      },
      link: {
        type: "string",
        title: "跳转地址",
        "x-decorator": "FormItem",
        "x-component": "Input",
        "x-component-props": {
          placeholder: "请输入跳转地址",
        },
        "x-validator": [{ maximum: 1000 }],
      },
    },
  },
};

export default PlainImageComponentSchema;
