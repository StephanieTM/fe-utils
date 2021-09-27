import Modal from './Modal';
import open from './open';
import { IModal, IOpenModalConfig } from './interface';
import './index.less';

(Modal as unknown as IModal).open = function (config: IOpenModalConfig) {
  return open(config);
};

export default Modal as IModal;
