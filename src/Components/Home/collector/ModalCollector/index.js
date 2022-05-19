import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useModal } from '../../../../Providers/Modal';
import ModalWaste from './../../../Home/collector/ModalWaste';
import ModalCompany from './../../../Home/collector/ModalCompany';
import { FinishingModal } from '../../../Home/collector/FinishingModal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '500px',
  minWidth: '300px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  boxShadow: 24,
  padding: '10px 30px 10px 30px',
  '.close': {position: 'absolute', right: '6px', top: '6px', border: 'none', fontSize: '15px', backgroundColor: 'transparent', fontWeight: 'bold', '&:hover': {color: 'var(--red)', borderBottom: '2px solid var(--red)'}}
};

 const CollectorModal = ({type}) => {
    const {modal, closeModal} = useModal()

  return (
    <Modal
    open={modal}
    onClose={closeModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <button onClick={closeModal} className='close'>Fechar</button>
          {
            type === "register"? ''
            :type === "waste"? <ModalWaste/>
            :type === "companies"?<ModalCompany/>
            :type === "finish" && <FinishingModal/>
          }
        </Box>
      </Modal>
  );
}


export default CollectorModal