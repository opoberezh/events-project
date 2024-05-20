import { useState } from 'react';
import ViewModal from '../../components/ViewModal/ViewModal';

function ParticipantsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ViewModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default ParticipantsPage;
