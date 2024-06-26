import React,{useState,useRef,useEffect} from 'react'
import { toast } from 'react-toastify';
export default function AudioVideoUploader(props) {
    const [file, setFile] = useState(null);
    const [isUploaded, setIsUploaded] = useState(props.uploaded);
    const [url,setUrl] = useState(props.fileAdded);
    const fileRef = useRef(null);
    const [loading,setLoading] = useState(false)
    const coverHandler = (e) => {
        if(e.target.files[0]){
            setFile(e.target.files[0]);
        }
        else{
            toast.error("No file chosen"),{
                toastId:"uploaddd-error-1aejdg"
            }
        }
    }
    const uploadHandler = () => {
        props.callback(file)
        setUrl(URL.createObjectURL(file))
        setIsUploaded(true)
    }
    const backImage = {
        backgroundImage: isUploaded?`url("${url}")`:``,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        borderColor:"transparent"
    }

    useEffect(()=>{
        if(file){
            setLoading(true)
            uploadHandler();
        }
    },[file])

    return (
        <div className='flex items-center cursor-pointer relative justify-center p-4 border border-dashed rounded-lg bg-white border-[#3090e9]'>
            {!isUploaded && <div className='flex items-center justify-between w-full'>
                <h6 className='text-sm font-normal text-[#3090e9]'>Upload here</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.09167 5.5917L9.16667 4.50836V14.1667C9.16667 14.3877 9.25446 14.5997 9.41074 14.756C9.56702 14.9122 9.77899 15 10 15C10.221 15 10.433 14.9122 10.5893 14.756C10.7455 14.5997 10.8333 14.3877 10.8333 14.1667V4.50836L11.9083 5.5917C11.9858 5.6698 12.078 5.7318 12.1795 5.77411C12.2811 5.81641 12.39 5.8382 12.5 5.8382C12.61 5.8382 12.7189 5.81641 12.8205 5.77411C12.922 5.7318 13.0142 5.6698 13.0917 5.5917C13.1698 5.51423 13.2318 5.42206 13.2741 5.32051C13.3164 5.21896 13.3382 5.11004 13.3382 5.00003C13.3382 4.89002 13.3164 4.7811 13.2741 4.67955C13.2318 4.578 13.1698 4.48583 13.0917 4.40836L10.5917 1.90836C10.5142 1.83026 10.422 1.76826 10.3205 1.72595C10.2189 1.68365 10.11 1.66187 10 1.66187C9.88999 1.66187 9.78107 1.68365 9.67952 1.72595C9.57797 1.76826 9.4858 1.83026 9.40833 1.90836L6.90833 4.40836C6.75141 4.56528 6.66326 4.77811 6.66326 5.00003C6.66326 5.22195 6.75141 5.43478 6.90833 5.5917C7.06525 5.74862 7.27808 5.83677 7.5 5.83677C7.72192 5.83677 7.93475 5.74862 8.09167 5.5917ZM15 7.50003H13.3333C13.1123 7.50003 12.9004 7.58783 12.7441 7.74411C12.5878 7.90039 12.5 8.11235 12.5 8.33336C12.5 8.55438 12.5878 8.76634 12.7441 8.92262C12.9004 9.0789 13.1123 9.1667 13.3333 9.1667H15C15.221 9.1667 15.433 9.2545 15.5893 9.41078C15.7455 9.56706 15.8333 9.77902 15.8333 10V15.8334C15.8333 16.0544 15.7455 16.2663 15.5893 16.4226C15.433 16.5789 15.221 16.6667 15 16.6667H5C4.77899 16.6667 4.56702 16.5789 4.41074 16.4226C4.25446 16.2663 4.16667 16.0544 4.16667 15.8334V10C4.16667 9.77902 4.25446 9.56706 4.41074 9.41078C4.56702 9.2545 4.77899 9.1667 5 9.1667H6.66667C6.88768 9.1667 7.09964 9.0789 7.25592 8.92262C7.4122 8.76634 7.5 8.55438 7.5 8.33336C7.5 8.11235 7.4122 7.90039 7.25592 7.74411C7.09964 7.58783 6.88768 7.50003 6.66667 7.50003H5C4.33696 7.50003 3.70107 7.76342 3.23223 8.23226C2.76339 8.7011 2.5 9.33699 2.5 10V15.8334C2.5 16.4964 2.76339 17.1323 3.23223 17.6011C3.70107 18.07 4.33696 18.3334 5 18.3334H15C15.663 18.3334 16.2989 18.07 16.7678 17.6011C17.2366 17.1323 17.5 16.4964 17.5 15.8334V10C17.5 9.33699 17.2366 8.7011 16.7678 8.23226C16.2989 7.76342 15.663 7.50003 15 7.50003Z" fill="#3090E9"/>
                </svg>
            </div>}
            {isUploaded && <h5 className={`text-sm font-normal text-[#AE445A]`}>Edit Picture</h5>}
            <input 
                type='file'
                ref={fileRef}
                multiple={false}
                onChange={coverHandler}
                className={`absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer`} 
                accept=".jpg,.png,.svg,.gif,.webp,.avif"
            />
        </div>
    )
}
