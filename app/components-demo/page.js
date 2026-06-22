"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Loader,
  ToastButton,
} from "../../components/ui";

export default function ComponentsDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-4xl font-bold">
        UI Components Demo
      </h1>

      <div className="space-x-4">
        <Button variant="primary">Primary</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>
      </div>

      <Input
        label="Email"
        placeholder="Enter your email"
      />

      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Sample Modal"
      >
        <p>This is a demo modal component.</p>
      </Modal>

      <ToastButton />

      <Loader />
    </div>
  );
}