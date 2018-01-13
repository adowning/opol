#!/bin/bash

# to have iptables recover at boot, make sure the following is installed
# apt-get install iptables-persistent

# reset everything!!
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -P INPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -P OUTPUT ACCEPT

## allow already estrablished connections to exists
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

## allow ssh, recommend changing default port or port forwarding
iptables -A INPUT -p tcp -i eth0 --dport 22 -j ACCEPT


### port forwarding

## this marks packets arriving specifically at port 8080
## we then drop those marked packets making access only on port 80
#iptables -t mangle -A PREROUTING -p tcp --dport 8080 -j MARK --set-mark 1
#iptables -A INPUT -m mark --mark 1 -j REJECT --reject-with icmp-port-unreachable

## forward port 80 to port 8080 on same device
## note that port 8080 must be opened as we do below the redirect line
## however direct access on port 8080 is blocked by the above rules
#iptables -t nat -A PREROUTING -i eth0 -p tcp -m tcp --dport 80 -j REDIRECT --to-ports 8080
#iptables -A INPUT -p tcp -m multiport --destination-ports 8080 -j ACCEPT


### open ports

## allow connections on ports for http and https
#iptables -A INPUT -p tcp -m multiport --destination-ports http,https -j ACCEPT

## ping me
iptables -A INPUT -p icmp -j ACCEPT

## self is allowed to see self
iptables -A INPUT -i lo -j ACCEPT


### rejections and default state

## rejected!
iptables -A INPUT -j REJECT --reject-with icmp-port-unreachable

## you shall not pass!
## set default policy to drop all incoming and forwarding packets
iptables -P INPUT DROP
iptables -P FORWARD DROP


# save for reload during reboot
iptables-save > /etc/iptables/rules
