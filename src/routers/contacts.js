import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { errorWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', errorWrapper(getContactsController));

router.get('/contacts/:contactId', errorWrapper(getContactByIdController));

router.post('/contacts', errorWrapper(createContactController));

router.delete('/contacts/:contactId', errorWrapper(deleteContactController));

router.patch('/contacts/:contactId', errorWrapper(patchContactController));

export default router;
