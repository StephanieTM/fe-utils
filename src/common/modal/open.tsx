import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'app/theme';
import Modal from './Modal';
import destroyFns from './destroyFns';
import { IOpenModalConfig, IOpenModalRenderConfig, IOpenModalResult, IUpdateOpenModalFunc } from './interface';

export default function open(config: IOpenModalConfig): IOpenModalResult {
  const div = document.createElement('div');
  document.body.appendChild(div);

  let curConfig: IOpenModalRenderConfig = {
    ...config,
    visible: true,
    close,
  };

  function render({ content, ...props }: IOpenModalRenderConfig): void {
    // 异步渲染，防止阻塞
    setTimeout(() => {
      ReactDOM.render(
        <ChakraProvider theme={theme}>
          <Modal {...props}>
            {content}
          </Modal>
        </ChakraProvider>,
        div
      );
    });
  }

  function destroy(): void {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    // TODO
    // const triggerCancel = args.some(param => param && param.triggerCancel);
    // if (config.onCancel && triggerCancel) {
    //   config.onCancel(...args);
    // }

    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function close(...args: unknown[]) {
    curConfig = {
      ...curConfig,
      visible: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy.apply(this, args);
      },
    };
    render(curConfig);
  }

  function update(configUpdate: IOpenModalConfig|IUpdateOpenModalFunc) {
    if (typeof configUpdate === 'function') {
      curConfig = configUpdate(curConfig);
    }
  }

  render(curConfig);

  destroyFns.push(close);

  return {
    destroy: close,
    update,
  };
}
