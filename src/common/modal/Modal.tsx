import React from 'react';
import { Button } from '@chakra-ui/react';
import { IModalProps } from './interface';

export default function Modal(props: IModalProps): JSX.Element {
  const { title, children, visible } = props;

  return visible ? (
    <div className="modal-container">
      <div className="modal-mask"></div>
      <div className="modal-wrap">
        <div className="modal" style={{ width: '600px' }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title-container">
                <div className="modal-title">{title}</div>
              </div>
            </div>
            <div className="modal-body">
              <div>{children}</div>
            </div>
            <div className="modal-footer-container">
              <div className="modal-footer">
                <Button>Cancel</Button>
                <Button variant="solid">Confirm</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <></>;
}
