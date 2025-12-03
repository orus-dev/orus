A critical vulnerability has been identified in the React Server Components (RSC) protocol. The issue is rated CVSS 10.0 and can allow remote code execution when processing attacker-controlled requests in unpatched environments.

<br/>
The exploit is running code on the server from the client without admin rights, somewhere in the SSR (Server Side Renderer) there is a exploit that allows a client to get unauthorized access to the server running Next.js.
<br/>
<br/>
Next.js is a react framework for making full-stack application with node.js and React.js, it has a complex SSR (Server Side Renderer) which makes it easy to miss things sometimes, however this is a very critical error, i believe it wasn't the staff's fault, things like these are very likely to happen, but Next.js is used by 75% of modern websites.
<br/>

## Affected versions

- Next.js 15.x
- Next.js 16.x
- Next.js 14.3.0-canary.77 and later canary releases

Next.js 13.x, Next.js 14.x stable, Pages Router applications, and the Edge Runtime are not affected.

## Fixed Versions

- 15.0.5
- 15.1.9
- 15.2.6
- 15.3.6
- 15.4.8
- 15.5.7
- 16.0.7

## Conclusion

They have fixed it as seen on the original blog post: https://nextjs.org/blog/CVE-2025-66478

But this shows just how important it is to watch out when working on such complex structures, one small mistake can cost a big price, remote code execution is one of them.
