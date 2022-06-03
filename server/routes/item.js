import express from 'express';
import { createItem,deleteItem, readItems,updateItem } from '../controllers/item.js';

 const router=express.Router();
router.get('/',readItems);
router.post('/',createItem);
router.patch('/:id',updateItem);
router.delete('/:id',deleteItem);
export default router