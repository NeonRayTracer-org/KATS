/*
 * This file is ONLY for overwriting the NodeJS namespace
 *
 * DO NOT EDIT OR REMOVE THIS FILE UNLESS YOU KNOW EXACTLY WHAT TO DO
 */

// tslint:disable-next-line: no-namespace
namespace NodeJS {
  interface Process {
    env: ProcessEnv
  }
  interface ProcessEnv {
    ALLOWED_DOMAINS: string
    APP_SECRET: string
    CLOUDINARY_API_KEY: string
    CLOUDINARY_API_SECRET: string
    CLOUD_NAME: string
    DOMAIN: string
    NODE_ENV: string
    PORT: number
    PRESET: string
  }
}
