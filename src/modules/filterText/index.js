/**
 * @Desc: fs_utils
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
const fs = require('fs')
// import * as fs from 'fs';
// const {readFile} = require('../../utils/fsPromise');
const glob = require('glob');

/**
 * 读取单个文件路径 TODO 弃用，改用{readFile} = fsPromise
 * @param path
 * @param callback
 */
const readFromFile = (path , callback) => {
  fs.readFile(path , (err , data) => {
    if (err) {
      console.log('报错了' , err);
    } else {
      console.log(data.toString());
      callback && callback(data);
    }
  });
};


/**
 * 遍历匹配文件
 * @param pattern
 * @param options
 * @param callback
 * @returns {Promise<unknown>}
 */
const readFromPatterns = ({pattern , options = {} , callback}) => {
  return new Promise((resolve , reject) => {
    glob(pattern , options , function (err , files) {
      if (err) {
        console.log('err' , err);
        reject(err);
      } else {
        resolve(files);
        return files;
      }
    });
  });

};


const fs_utils = {
  readFromFile ,
  readFromPatterns
};

export default fs_utils

// module.exports = fs_utils;
