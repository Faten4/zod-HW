import express from 'express';
import validate from '../middleware/validate';

import {
  parkSchema,
  ParkSchemaType,
} from '../zod_schema/park.schema';

const router = express.Router();

let park : ParkSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.status(200).json(park);
});

router.post('/', validate(parkSchema), (req, res, next) => {
  const newpark = req.body as ParkSchemaType;

  park.push(newpark);
  return res.status(201).json({ message: ' Added !' });
});

router.put('/:id',validate(parkSchema), (req, res) => {
    const updatepark = req.body as ParkSchemaType;
    const { id } = req.params;
  
    const updatedpark = park.filter((i) => {
      return i.id !== id;
    });
  
    updatedpark .push(updatepark);
  
    park = updatedpark;
  
    return res.json({
      message: ' Updated !',
    });
  });



router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const delete1 = park.filter((i) => {
      return i.id !== id ;
    });
  
    park = delete1;
    return res.json({
      message: 'deleted !',
    });
});


export default router;