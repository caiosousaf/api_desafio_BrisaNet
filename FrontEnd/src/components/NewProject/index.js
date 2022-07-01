import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import NewProject from '../../assets/icons/new.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#494A58',
  borderRadius: 5,
  boxShadow: 24,
  p: 5
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="new-project me-3"><img src={NewProject} alt="" /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-describedby="modal-modal-equipe"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicionar Projeto
          </Typography>
          <TextField id="outlined-basic" label="Nome" variant="outlined" margin="dense" fullWidth/>
          <TextField
          id="outlined-multiline-flexible"
          label="Descrição"
          multiline
          maxRows={4}
          margin="dense"
          fullWidth
         />
         <TextField id="outlined-basic" label="Equipe" variant="outlined" margin="dense" fullWidth> </TextField>
        </Box>
      </Modal>
    </div>
  );
}
