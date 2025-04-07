import React, { useState, ChangeEvent, ChangeEventHandler } from 'react';

interface FileProgress {
    [filename: string]: number;
}

interface FileUploaderProps {}

const FileUploader = ({}: FileUploaderProps) => {
    const [files, setFiles] = useState<File[]>([]);
    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<FileProgress>({});
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = (e:ChangeEvent<HTMLInputElement> ) => {
        if (e.target.files){
            const newFiles = Array.from(e.target.files);
            setFiles([...files,...newFiles])
        }
    };

    const uploadFiles = async() => {
        if (files.length === 0) {
            setUploadStatus('No files to upload');
            return;
        }
    }

    setUploading(true);
    setUploadStatus('Uploading..');

    const initialProgress: FileProgress = {};
    files.forEach(file => {
        initialProgress[file.name] = 0;
    });
    setUploadProgress(initialProgress);

    try {
        for (const file of files ) {
            for (let percent = 0; )
        }
    }

