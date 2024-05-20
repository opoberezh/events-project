import { useState } from 'react';
import RegisterModal from '../../components/RegisterModal/RegisterModal';

function RegisterPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <RegisterModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default RegisterPage;
