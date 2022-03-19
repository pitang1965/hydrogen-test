/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {useForm} from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('res: ', res);
      reset();
      alert('お問い合わせが送信されました。');
    } catch (error) {
      console.error('Fetch error : ', error);
      alert(JSON.stringify(error));
    }
  };

  return (
    <>
      <main className="flex-col px-1">
        <h1 className="flex justify-center text-4xl font-bold text-blue-600/80">
          お問い合わせ
        </h1>
        <p className="mt-8">ピータンのGmailに送られます。</p>
        <form onSubmit={handleSubmit(onSubmit)} className="my-4 mx-2">
          <fieldset className="flex gap-2">
            <label className="p-1 w-16">名前</label>
            <input
              {...register('name', {required: true, maxLength: 100})}
              placeholder="名前（必須）"
              className="grow p-1 border-2"
            />
          </fieldset>
          {errors.name && (
            <p className="ml-20 text-[#ff0000]">名前は必須です。</p>
          )}
          <fieldset className="flex gap-2 mt-4">
            <label className="p-1 w-16">メール</label>
            <input
              type="email"
              {...register('email', {required: true})}
              placeholder="メールアドレス（必須）"
              className="grow p-1 border-2"
            />
          </fieldset>
          {errors.name && (
            <p className="ml-20 text-[#ff0000]">メールアドレスは必須です。</p>
          )}
          <fieldset className="flex gap-2 mt-4">
            <label className="p-1 w-16 ">内容</label>
            <textarea
              {...register('inquiry', {
                required: true,
                minLength: 5,
                maxLength: 500,
              })}
              placeholder="問い合わせ内容"
              rows={10}
              className="grow p-1 leading-5 border-2"
            />
          </fieldset>
          {errors.inquiry && (
            <p className="ml-20 text-[#ff0000]">問い合わせ内容は必須です。</p>
          )}
          <input
            type="submit"
            className="block py-2 px-4 mx-auto mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded"
          />
        </form>
      </main>
    </>
  );
};

export default Contact;
