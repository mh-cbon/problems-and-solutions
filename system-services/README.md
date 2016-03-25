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

# Linux upstart

#### existing node modules
- https://github.com/carlos8f/node-upstarter
- https://github.com/strongloop/strong-service-upstart

#### HOW TO DIY
- http://upstart.ubuntu.com/cookbook/

# Linux systemd

#### existing node modules
- https://github.com/coreybutler/node-linux
- https://github.com/simone-sanfratello/node-service-systemd
- https://github.com/strongloop/strong-service-systemd

# Linux systemv

#### existing node modules
- https://github.com/coreybutler/node-linux

# Mac

#### existing node modules
- https://github.com/coreybutler/node-mac
