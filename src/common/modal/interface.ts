import React from 'react';

export type IModal = {
  (props: IModalProps): JSX.Element;
  open: (config: IOpenModalConfig) => void;
}

export interface IOpenModalConfig {
  title: string;
  content: React.ReactChild;
  afterClose?: () => void;
}

export interface IModalProps {
  title: string;
  children: React.ReactChild;
  visible: boolean;
  afterClose?: () => void;
}

export type IOpenModalRenderConfig = IOpenModalConfig & Pick<IModalProps, 'visible'> & { close: (...args: unknown[]) => void };

export type IUpdateOpenModalFunc = (curConfig: IOpenModalConfig) => IOpenModalRenderConfig;

export interface IOpenModalResult {
  destroy: (...args: unknown[]) => void;
  update: (configUpdate: IOpenModalConfig|IUpdateOpenModalFunc) => void;
}
