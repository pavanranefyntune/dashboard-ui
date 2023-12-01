import Upgrade from '../RightSection/Upgrade';
import Meeting from "../RightSection/Meeting";
import TeamMember from './Team member/TeamMember';
import MemberModal from './Team member/MemberModal';
import { useState } from 'react';

const RightSection = () => {

  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }

  return (
    <div className='flex flex-col gap-4'>
        <Upgrade/>
        <Meeting/>
        <TeamMember openModal={openModal} />
        {show && <MemberModal closeModal={closeModal} />}
    </div>
  )
}

export default RightSection