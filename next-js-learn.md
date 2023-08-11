next.js必须用64位的node执行程序才可以
> https://nodejs.org/download/release/latest/win-x64/
> https://github.com/vercel/next.js/discussions/47670

git配置HTTPS 代理

```bash
$ git config --global -e
```

```conf
[http]
        proxy = socks5://127.0.0.1:7890
[https]
        proxy = socks5://127.0.0.1:7890
```