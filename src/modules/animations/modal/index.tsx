import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Modal } from 'common';

export default function Comp(): JSX.Element {
  const [visible, setVisible] = useState(false);

  function handleClick1(): void {
    setVisible(true);
  }

  function handleClick2(): void {
    Modal.open({ title: 'Modal2', content: 'This is Modal2' });
  }

  return (
    <div>
      <Button onClick={handleClick1}>Open Modal1</Button>
      <Button onClick={handleClick2}>Open Modal2</Button>
      <Modal title="Modal1" visible={visible}>
        This is Modal1
      </Modal>
    </div>
  );
}
