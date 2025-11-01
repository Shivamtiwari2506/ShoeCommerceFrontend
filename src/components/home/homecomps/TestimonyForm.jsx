import { Button, Form, Modal } from 'antd';
import React, { useState } from 'react'
import { IconStar } from '@tabler/icons-react';
import { decryptData } from '../../../common/commonFunction';

const TestimonyForm = ({openModal, toggleModal, submitForm}) => {
   const [form] = Form.useForm();
   const [filledStars, setFilledStars] = useState(0);
   const addRating = (star) => {
      setFilledStars(star);
      form.setFieldsValue({ rating: star });
   }
   const handleSubmit = async () => {
      await form.validateFields();

      let values = form.getFieldsValue();
      values.userId = decryptData(localStorage.getItem('userId'));
      submitForm(values);
   }
  return (
    <>
    <Modal
      title={<span className='font-bold text-xl'>Submit Your Testimony</span>}
      centered
      open={openModal}
      onCancel={toggleModal}
      footer={
         <div className='mt-2 mb-2 flex gap-2 justify-end'>
           <Button
            type='default'
             onClick={toggleModal}
           >
             Cancel
           </Button>
           <Button
           type='primary'
             onClick={handleSubmit}
           >
             Save
           </Button>
         </div>
       }
    >
      <Form
      form={form}
       layout='vertical'
      >
         <Form.Item 
             label={<span className='font-semibold'>Rate Your Experience</span>}
             name="rating"
             rules={[{ required: true, message: 'Please enter rating' }]}
         >
            <div className='flex'>
            {[1,2,3,4,5].map((star) => (
               <IconStar stroke={2} className='mx-1 cursor-pointer' 
                  key={star}
                  fill={star <= filledStars ? 'gold': 'none'} color={star <= filledStars ? 'gold': '#d1d5db'}
                  size={24}
                  onClick={() => addRating(star)}
               />
            ))}
            </div>
         </Form.Item>
         <Form.Item 
             label={<span className='font-semibold'>Enter Your Message</span>}
             name="message"
             rules={[{ required: true, message: 'Please enter description' }]}
         >
            <textarea className='w-full h-32 border border-gray-300 rounded-md p-2' placeholder='Write your testimony here...'></textarea>
         </Form.Item>
      </Form>
    </Modal>
    </>
  )
}

export default TestimonyForm;