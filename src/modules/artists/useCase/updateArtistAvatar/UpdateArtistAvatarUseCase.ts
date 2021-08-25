import { IArtistRepository } from "@modules/artists/repositories/IArtistRepository";
import { deleteFile } from "@utils/file";
import { inject, injectable } from "tsyringe";

interface IRequest {
  artist_id: string;
  avatar_file: string;
}

@injectable()
export default class UpdateArtistAvatarUseCase {
  constructor(
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
  ){}

  async execute({artist_id, avatar_file}: IRequest): Promise<void> {
    const artist = await this.artistRepository.findById(artist_id);

    if (artist.avatar) {
      await deleteFile(`./tmp/avatar/${artist.avatar}`);
    }

    artist.avatar = avatar_file;
  
    await this.artistRepository.create(artist);
  }

}