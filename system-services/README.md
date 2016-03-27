# system-services
summary about system services management in various oses with a focus for node.

# windows

#### existing node modules
- https://github.com/coreybutler/node-windows
- https://github.com/stephenwvickers/node-os-service
- https://github.com/jfromaniello/winser
- https://github.com/tallesl/qckwinsvc

###### node-windows

__pros__ Use native windows module, proven-to-work, well used.

__cons__ missing test suite, poorly active maintenance if any, not clear if it needs to run the program as administrator manually or if it s handled

###### node-os-service

__pros__ support both linux / windows, active maintenance

__cons__ Relies on node-gyp, not much usage, no clear compatibility table (to me), not clear if it needs to run the program as administrator manually or if it s handled

quoted from its readme,
```
On Windows platforms the Windows Service Control Manager WIN32 API is used to manage services.
On Linux platforms the chkconfig command is used, and if not available, the update-rc.d command is used instead.
```

###### winser

__pros__ clearly automated, relies on nssm, heavy usage of package file for automation

__cons__ relies on extra embedded pre built binary, very low maintenance

###### qckwinsvc

As stated by the author it is only a wrapper around node-windows.

#### HOW TO DIY

[sc](https://technet.microsoft.com/en-us/library/bb490995.aspx) command is the standard way to go to manage services.

According to those readings,
- http://www.tenforums.com/tutorials/4499-services-start-stop-disable-windows-10-a.html#option3
- https://technet.microsoft.com/en-us/library/cc990289.aspx
- http://stackoverflow.com/questions/13847771/how-to-install-a-service-on-windows-7-without-visual-studio
- http://stackoverflow.com/questions/18508628/how-to-install-a-windows-service-from-command-line-specifying-name-and-descripti
- https://support.microsoft.com/en-us/kb/251192

#### specifics

- http://stackoverflow.com/questions/3663331/creating-a-service-with-sc-exe-how-to-pass-in-context-parameters
- it probably needs administrator rights

#### alternatives

- [nssm](https://nssm.cc/)
- [installutil](https://msdn.microsoft.com/en-us/library/sd8zc8ha%28v=vs.110%29.aspx)

# Linux generals

- http://unix.stackexchange.com/questions/121654/convenient-way-to-check-if-system-is-using-systemd-or-sysvinit-in-bash
- http://unix.stackexchange.com/questions/18209/detect-init-system-using-the-shell
- http://unix.stackexchange.com/questions/196166/how-to-find-out-if-a-system-uses-sysv-upstart-or-systemd-initsystem

# Linux upstart

#### existing node modules
- https://github.com/carlos8f/node-upstarter
- https://github.com/strongloop/strong-service-upstart

#### HOW TO DIY
- http://upstart.ubuntu.com/cookbook/
- https://www.digitalocean.com/community/tutorials/the-upstart-event-system-what-it-is-and-how-to-use-it
- http://upstart.ubuntu.com/wiki/Stanzas
- http://blog.terminal.com/getting-started-with-upstart/
- https://github.com/ilcic/Upstart-and-Service-framework

__get upstart version__
- http://askubuntu.com/questions/396167/how-can-i-check-if-upstart-is-installed-in-ubuntu-server-and-how-can-i-install-i

# Linux systemd

#### existing node modules
- https://github.com/coreybutler/node-linux
- https://github.com/simone-sanfratello/node-service-systemd
- https://github.com/strongloop/strong-service-systemd

#### HOW TO DIY
- https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/chap-Managing_Services_with_systemd.html
- https://www.certdepot.net/rhel7-get-started-systemd/
- (fr) http://www.linuxtricks.fr/wiki/systemd-les-commandes-essentielles

# Linux systemv

#### existing node modules
- https://github.com/coreybutler/node-linux
- https://github.com/Lcfvs/init.d-script-sample

#### HOW TO DIY
- https://www.digitalocean.com/community/tutorials/how-to-configure-a-linux-service-to-start-automatically-after-a-crash-or-reboot-part-2-reference
- https://wiki.archlinux.org/index.php/SysVinit
- http://linoxide.com/linux-command/systemd-vs-sysvinit-cheatsheet/
- http://www.tecmint.com/linux-boot-process-and-manage-services/

# Mac

#### existing node modules
- https://github.com/coreybutler/node-mac
- https://github.com/bryanmacfarlane/svcinstall
- https://github.com/evanlucas/node-launchd.plist

#### HOW TO DIY
- https://developer.apple.com/library/mac//documentation/Darwin/Reference/ManPages/man5/launchd.plist.5.html
- http://nathangrigg.net/2012/07/schedule-jobs-using-launchd/#launchctl
- http://stackoverflow.com/questions/15735320/osx-s-etc-init-d-equivalent
- https://github.com/TooTallNate/plist.js
