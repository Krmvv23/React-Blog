export default function App() {
    setTimeout(() => {
        document.querySelector('.backdrop').classList.add('d-none')
    }, 3000);
  return (
    <div className='backdrop d-flex justify-content-center align-items-center'>
      <div>
        <span className=' spinner-border text-light h3'></span>
      </div>
    </div>
    );
}
