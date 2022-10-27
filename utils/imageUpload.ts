export const imageUpload = async (images: any) => {
  let imgArr = []
  for (const item of images) {
    const formData = new FormData()

    formData.append('file', item)
    formData.append(
      'upload_preset',
      process.env.CLOUDINARY_UPDATE_PRESET as string
    )
    formData.append('cloud_name', process.env.CLOUDINARY_NAME as string)

    const res = await fetch(process.env.CLOUDINARY_API as string, {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    imgArr.push({ public_id: data.public_id, url: data.secure_url })
  }

  return imgArr
}
