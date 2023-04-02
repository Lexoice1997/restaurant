import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { S3 } from 'aws-sdk';
import { read } from 'fs';
import { google } from 'googleapis';
import { Stream } from 'stream';
import * as uuid from 'uuid';

const CLIENT_ID =
  '884429960614-890a820ievdc0rudu58ii3cgnb5o5fun.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN =
  '1//04n8hTQNq0H1HCgYIARAAGAQSNwF-L9Irhn9gpRk1HsFosZTY516jU1LTakn08gviXufBruLEWvYFB1BaiPyQVVy5VwQLqdgpbDE';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

@Injectable()
export class FilesService {
  async createFile(file) {
    try {
      const fileName = uuid.v4() + '.jpg';
      const bucketName = process.env.AWS_BUCKET_NAME;
      const region = process.env.AWS_BUCKET_REGION;
      const accessKeyId = process.env.AWS_ACCESS_KEY;
      const secretAccessKey = process.env.AWS_SECRET_KEY;

      const s3 = new S3({
        region,
        accessKeyId,
        secretAccessKey,
      });

      const response = await s3
        .upload({
          Bucket: bucketName,
          Body: file.buffer,
          Key: fileName,
          ACL: 'public-read',
        })
        .promise();

      return { fileName: response.Location, fileId: response.Key };

      // console.log(file);
      // const response = await drive.files.create({
      //   requestBody: {
      //     name: fileName,
      //     mimeType: 'image/jpg',
      //   },
      //   media: {
      //     mimeType: 'image/jpg',
      //     body: bufferStream,
      //   },
      // });

      // const fileId = response.data.id;

      // await drive.permissions.create({
      //   fileId: fileId,
      //   requestBody: {
      //     role: 'reader',
      //     type: 'anyone',
      //   },
      // });

      // const result = await drive.files.get({
      //   fileId: fileId,
      //   fields: 'webViewLink, webContentLink',
      // });

      // return { fileName: result.data.webViewLink, fileId: fileId };
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при записи файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteFile(fileId: string) {
    try {
      const bucketName = process.env.AWS_BUCKET_NAME;
      const region = process.env.AWS_BUCKET_REGION;
      const accessKeyId = process.env.AWS_ACCESS_KEY;
      const secretAccessKey = process.env.AWS_SECRET_KEY;
      const s3 = new S3({
        region,
        accessKeyId,
        secretAccessKey,
      });
      await s3.deleteObject({ Bucket: bucketName, Key: fileId }).promise();

      // const response = await drive.files.delete({
      //   fileId: fileId,
      // });
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при удалении файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
