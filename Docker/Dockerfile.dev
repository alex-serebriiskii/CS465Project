FROM mcr.microsoft.com/dotnet/sdk

ARG BUILD_CONFIGURATION=Debug
ENV ASPNETCORE_ENVIRONMENT=Development
ENV DOTNET_USE_POLLING_FILE_WATCHER=true
ENV ASPNETCORE_URLS=http://+:80

RUN apt-get upgrade
RUN apt-get update
RUN apt-get install -y npm unzip

RUN curl -fsSL https://fnm.vercel.app/install | bash
RUN . /root/.bashrc && \
  /root/.fnm/fnm install 14 && \
  /root/.fnm/fnm use 14

WORKDIR /app

EXPOSE 9456
EXPOSE 9457
EXPOSE 9458

#ENTRYPOINT ["dotnet", "watch", "run"]
ENTRYPOINT ["/bin/bash", "-c"]

