import React from 'react';

interface Step1ContentProps {
  onNext: () => void;
}

const Step1Content: React.FC<Step1ContentProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-md">
        {/* タイトル */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">colosomへようこそ</h1>
          <p className="text-gray-600">あなたのファッションライフをもっと楽しく</p>
        </div>

        {/* ログインボタン */}
        <div className="space-y-4">
          <button 
            className="w-full flex items-center justify-center py-4 px-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg"
            onClick={onNext}
          >
            <span>メールアドレスで続行</span>
          </button>

          <button 
            className="w-full flex items-center justify-center py-4 px-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors shadow-lg border border-gray-200"
            onClick={onNext}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Googleで続ける</span>
          </button>

          <button 
            className="w-full flex items-center justify-center py-4 px-4 bg-[#06C755] text-white rounded-xl hover:bg-[#05B54A] transition-colors shadow-lg"
            onClick={onNext}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.282.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.282.63.63 0 .348-.281.63-.63.63h-2.386c-.348 0-.63-.282-.63-.63V8.108c0-.348.282-.63.63-.63h2.386c.349 0 .63.282.63.63 0 .348-.281.63-.63.63H17.61v1.125h1.755zM14.756 12.348h-1.125V8.108c0-.348.282-.63.63-.63h1.125c.697 0 1.255.558 1.255 1.255 0 .45-.235.84-.592 1.062.465.221.777.674.777 1.194 0 .765-.618 1.36-1.38 1.36zm-.63-3.495v1.005h.495c.21 0 .38-.17.38-.38 0-.21-.17-.38-.38-.38h-.495zm.63 1.755h-.63v1.125h.63c.21 0 .38-.17.38-.38 0-.208-.17-.38-.38-.38v-.365zM12.772 12.348H11.12V8.108c0-.348.282-.63.63-.63h.772c1.304 0 2.36 1.056 2.36 2.36 0 1.303-1.056 2.36-2.36 2.36h-.75zm-.63-3.495v2.13h.75c.61 0 1.105-.495 1.105-1.105 0-.61-.495-1.105-1.105-1.105h-.75zM8.394 12.348H6.75V8.108c0-.348.282-.63.63-.63h1.125c.697 0 1.255.558 1.255 1.255 0 .45-.235.84-.592 1.062.465.221.777.674.777 1.194 0 .765-.618 1.36-1.38 1.36zm-.63-3.495v1.005h.495c.21 0 .38-.17.38-.38 0-.21-.17-.38-.38-.38h-.495zm.63 1.755h-.63v1.125h.63c.21 0 .38-.17.38-.38 0-.208-.17-.38-.38-.38v-.365zM4.5 12.348H2.85V8.108c0-.348.282-.63.63-.63H4.5c.697 0 1.255.558 1.255 1.255 0 .45-.235.84-.592 1.062.465.221.777.674.777 1.194 0 .765-.618 1.36-1.38 1.36zm-.63-3.495v1.005h.495c.21 0 .38-.17.38-.38 0-.21-.17-.38-.38-.38h-.495zm.63 1.755h-.63v1.125h.63c.21 0 .38-.17.38-.38 0-.208-.17-.38-.38-.38v-.365z"/>
            </svg>
            <span>LINEで続ける</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1Content; 