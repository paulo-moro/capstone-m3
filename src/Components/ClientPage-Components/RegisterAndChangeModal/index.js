import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '300px',
  maxWidth: '500px',
  minWidth: '300px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '12px',
  boxShadow: 24,
  padding: '10px 30px 10px 30px',
  '.close': {position: 'absolute', right: '6px', top: '6px', border: 'none', fontSize: '15px', backgroundColor: 'transparent', fontWeight: 'bold', '&:hover': {color: 'var(--red)', borderBottom: '2px solid var(--red)'}}
};

 const RegisterAndChangeModal = ({children, modal, close}) => {
    
  return (
    <div>
      <Modal
        open={modal}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <button onClick={close} className='close'>Fechar</button>
            {children}
        </Box>
      </Modal>
    </div>
  );
}
export default RegisterAndChangeModal