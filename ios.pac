function FindProxyForURL(url, host) {
     url = url.toLowerCase();
     host = host.toLowerCase();
     // if (isResolvable(host)) {
     //      return "DIRECT";
     // }

     // if (isInNet(host, "10.0.0.0", "255.0.0.0")) {
     //      return "PROXY 112.193.99.40:6666";
     // }

          return "SOCKS5 112.193.99.40:7891; PROXY 192.168.0.148:6666; SOCKS 112.193.99.40:7891; DIRECT ";
     

}