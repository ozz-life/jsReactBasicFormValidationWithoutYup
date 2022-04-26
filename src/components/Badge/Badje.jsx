import React from 'react'
import { useForm } from 'react-hook-form'

const Badje = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (data, firstName) => alert(JSON.stringify(data, firstName))

  return (
    <>
      <div className='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Посетитель */}
          <div className='form-row'>
            <div className='form-group col-5'>
              <label>Посетитель</label>
              <input
                name='firstName'
                type='text'
                {...register('firstName', {
                  required: 'Введите имя посетителя'
                })}
                className={`form-control ${
                  errors.firstName ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback'>
                {errors.firstName?.message}
              </div>
            </div>
          </div>
          {/* /Посетитель */}

          {/* Дата посещения */}
          <div className='form-row'>
            <div className='form-group col-5'>
              <label>Дата посещения:</label>

              <input
                type='date'
                {...register('date', {
                    required: 'Пожалуйста, введите допустимую дату'
                  })}
                  className={`form-control ${
                    errors.date ? 'is-invalid' : ''
                  }`}
              />
              <div className='invalid-feedback'>{errors.date?.message}</div>
            </div>
          </div>
          {/* /Дата посещения */}

          {/* Кнопки */}
          <button type='submit' className='btn btn-secondary'>
            Подтвердить
          </button>
          <button
            type='button'
            onClick={() => reset()}
            className='btn btn-secondary'
          >
            Сбросить
          </button>
          {/* /Кнопки */}
        </form>
      </div>
    </>
  )
}

export default Badje
