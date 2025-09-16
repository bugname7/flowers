import { ClipLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <ClipLoader color="#34D399" size={80} />
        </div>
    );
}
