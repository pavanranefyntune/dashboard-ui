import Upgrade from '../RightSection/Upgrade';
import Meeting from "../RightSection/Meeting";
import TeamMember from './TeamMember';

const RightSection = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Upgrade/>
        <Meeting/>
        <TeamMember/>
    </div>
  )
}

export default RightSection