import React from 'react';
import Button from 'react-bootstrap/Button';

export default function BasicButtons() {
    return (
        <div className="d-flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
        </div>
    );
}
